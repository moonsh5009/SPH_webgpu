const output_label : HTMLElement = <HTMLElement> document.getElementById("comp-check");
if (navigator.gpu)
{
    output_label.innerHTML = "This browser can support webGPU 2";
}
else{
    output_label.innerHTML = "This browser can't support webGPU 2";
}

import { MGPUDevice } from "./webgpu/MGPUDevice"
await MGPUDevice.Instance().Initalize();

import { MGPUContext } from "./webgpu/MGPUContext"
import GetTriShaderPipeline from "./render/TrianglePipeline"

let gpuContext : MGPUContext = new MGPUContext("gfx-main");
gpuContext.SetClearColor([0.2, 0.4, 0.6, 1.0]);

const pipeline = GetTriShaderPipeline(gpuContext.GetTextureFormat());

gpuContext.BeginContext();

gpuContext.GetPass()?.setPipeline(pipeline);
gpuContext.GetPass()?.draw(3, 1, 0, 0);

gpuContext.EndContext();