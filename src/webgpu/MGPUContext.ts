import { MGPUDevice } from "./MGPUDevice"

export class MGPUContext
{
    private m_canvas : HTMLCanvasElement;

    private m_context : GPUCanvasContext;
    private m_textureFormat : GPUTextureFormat;
    private m_renderPassEncorder : GPURenderPassEncoder | undefined;

    private m_clearColor : GPUColor;

    constructor(canvasID : string)
    {
        this.m_canvas = <HTMLCanvasElement>document.getElementById(canvasID);
        if (!this.m_canvas)
        {
            throw new Error("Canvas is null");
        }

        this.m_context = <GPUCanvasContext>this.m_canvas.getContext("webgpu");
        this.m_textureFormat = MGPUDevice.Instance().GetGPU().getPreferredCanvasFormat();
        
        this.m_context.configure
        ({
            device: MGPUDevice.Instance().GetDevice(),
            format: this.m_textureFormat
        });

        this.m_clearColor = [1.0, 1.0, 1.0, 1.0];
    }

    SetClearColor(color: GPUColor)
    {
        this.m_clearColor = color;
    }

    GetCanvas() : HTMLElement
    {
        return this.m_canvas;
    }

    GetTextureFormat() : GPUTextureFormat
    {
        return this.m_textureFormat;
    }

    GetPass() : GPURenderPassEncoder | undefined
    {
        return this.m_renderPassEncorder;
    }

    BeginContext(loadOper: GPULoadOp = "clear", storeOper: GPUStoreOp = "store")
    {
        if (this.m_renderPassEncorder != undefined)
            return;
        
        this.m_renderPassEncorder = MGPUDevice.Instance().GetEncorder().beginRenderPass
        ({
            colorAttachments :
            [{
                view: this.m_context.getCurrentTexture().createView(),
                clearValue: this.m_clearColor,
                loadOp: loadOper,
                storeOp: storeOper,
            }]
        });
    }

    EndContext()
    {
        if (this.m_renderPassEncorder == undefined)
            return;

        this.m_renderPassEncorder.end();
        MGPUDevice.Instance().SubmitFinish();
        
        this.m_renderPassEncorder = undefined;
    }
}