import { MGPUDevice } from "../webgpu/MGPUDevice"
import vertShader from "./shaders/TriangleVert.wgsl"
import fragShader from "./shaders/TriangleFrag.wgsl"

export default function GetPipeline(textureFormat : GPUTextureFormat) : GPURenderPipeline
{
    const vertModule : GPUShaderModule = MGPUDevice.Instance().GetDevice().createShaderModule({
        code: vertShader
    });
    const fragModule : GPUShaderModule = MGPUDevice.Instance().GetDevice().createShaderModule({
        code: fragShader
    });

    const pipeline : GPURenderPipeline = MGPUDevice.Instance().GetDevice().createRenderPipeline({
        vertex: {
            module: vertModule,
            entryPoint: "main",
        },

        fragment: {
            module: fragModule,
            entryPoint: "main",
            targets: [{
                format: textureFormat
            }]
        },

        primitive: {
            topology: "triangle-list"
        },

        layout: "auto"
    });

    return pipeline;
}