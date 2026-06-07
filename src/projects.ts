export const projects = {
  rodan: {
    title: "Rodan",
    category: "Render Engine",
    intro:
      "Rodan is my render engine layer built on top of Velos. It focuses on real-time rendering features, runtime architecture, debug tooling, and practical engine systems.",
    stack: ["C++23", "Vulkan", "GLFW", "ImGui", "Assimp", "GLM"],
    sections: [
      {
        title: "Overview",
        body: "Rodan owns the application lifecycle, windowing, input, camera systems, model loading, debug rendering, ImGui integration, and high-level rendering flow.",
      },
      {
        title: "Highlights",
        body: "Current features include model rendering, skybox rendering, debug line rendering, FPS graph tooling, swapchain resizing, and an ImGui renderer built on top of my RHI.",
      },
    ],
  },

  velos: {
    title: "Velos",
    category: "Vulkan RHI",
    intro:
      "Velos is my low-level rendering hardware interface with a Vulkan backend. It is designed around explicit rendering concepts and backend abstraction.",
    stack: ["C++23", "Vulkan", "Volk", "shaderc", "SPIRV-Reflect"],
    sections: [
      {
        title: "Overview",
        body: "Velos abstracts buffers, images, image views, samplers, pipelines, descriptor sets, command lists, swapchains, and dynamic rendering.",
      },
      {
        title: "Highlights",
        body: "The current Vulkan backend supports dynamic rendering, shader reflection, descriptor creation, image layout transitions, command recording, and a handles-based API.",
      },
    ],
  },

  "procedural-shader-framework": {
    title: "Procedural Shader Framework",
    category: "Unreal Engine",
    intro:
      "A planned Unreal Engine framework for procedural, ShaderToy-like graphics workflows.",
    stack: ["Unreal Engine", "HLSL", "Materials", "Procedural Graphics"],
    sections: [
      {
        title: "Goal",
        body: "The goal is to create reusable shader building blocks for procedural effects and graphics experimentation inside Unreal Engine.",
      },
    ],
  },
};