export class MGPUDevice
{
    private static instance : MGPUDevice;

    private m_adapter : GPUAdapter | null = null;
    private m_device : GPUDevice | null = null;
    private m_encoder : GPUCommandEncoder | null = null;

    static Instance() : MGPUDevice
    {
        if (!MGPUDevice.instance)
        {
            MGPUDevice.instance = new MGPUDevice();
            console.log("gpu init");
        }
        return MGPUDevice.instance;
    }

    public async Initalize()
    {
        if (this.m_device != undefined)
            return;
        
        if (!navigator.gpu)
        {
            throw new Error("WebGPU not supported on this browser.");
        }

        this.m_adapter = await navigator.gpu.requestAdapter();
        if (!this.m_adapter)
        {
            throw new Error("No appropriate GPUAdapter found.");
        }

        this.m_device = await this.m_adapter.requestDevice();
        this.m_encoder = this.m_device.createCommandEncoder();
    }

    GetGPU() : GPU
    {
        return navigator.gpu;
    }

    GetDevice() : GPUDevice
    {
        return <GPUDevice>this.m_device;
    }

    GetEncorder() : GPUCommandEncoder
    {
        return <GPUCommandEncoder>this.m_encoder;
    }

    SubmitFinish()
    {
        this.GetDevice().queue.submit([this.GetEncorder().finish()]);
    }
}