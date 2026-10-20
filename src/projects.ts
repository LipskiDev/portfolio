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

  iryven: {
    title: "Iryven",
    category: "3D Game Engine",
    intro:
      "Iryven is my C++20 3D game engine for building interactive worlds and real-time rendering experiences. Built on my Velos rendering hardware interface, it combines a deferred renderer for Vulkan and Direct3D 12 with scene simulation, asynchronous asset loading, and an ImGui editor.",
    stack: ["C++20", "Vulkan", "Direct3D 12", "HLSL", "Velos RHI", "Flecs", "ImGui"],
    sections: [
      {
        title: "Meshlet rendering",
        body: "Meshes are partitioned into meshlets with meshoptimizer. The Vulkan path uses task and mesh shaders, with Hi-Z depth-pyramid reduction on the compute queue. A frozen culling camera and meshlet color view help inspect visibility and geometry.",
      },
      {
        title: "Deferred Clustered Lighting",
        body: "The scene is rendered into a G-Buffer which is split up into a BaseColorMetallic, NormalRoughness, EmissiveOcclusion and Specular buffer. The shading is later computed in a clustered manner to support up to 512 unique lightsources."
      },
      {
        title: "World and simulation",
        body: "A Flecs entity-component system stores scene state, including transforms, cameras, lights, and mesh renderers. A Box3D integration connects rigid bodies and colliders to the world simulation.",
      },
      {
        title: "Asset pipeline",
        body: "OBJ and glTF importers feed the engine’s asset system. Asynchronous loading uses enkiTS workers, with GPU uploads handled through a dedicated upload queue.",
      },
      {
        title: "Render scheduling",
        body: "A frame graph organizes rendering passes, resource transitions, and queue synchronization. The deferred renderer runs on Vulkan and Direct3D 12 through Velos, with HLSL shader stages shared across the backends.",
      },
      {
        title: "Scene editor",
        body: "An ImGui editor provides entity selection, transform and light editing, an adjustable fly camera, and an asset browser for model import and assignment. Scenes save to JSON; play mode snapshots the scene and restores it when stopped.",
      },
    ],
  },
};
