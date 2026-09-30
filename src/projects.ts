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
      "Iryven is my C++20 3D game engine for building interactive worlds and real-time rendering experiences. Built on my Velos rendering hardware interface, it brings together Vulkan rendering, scene simulation, asset loading, and editor tooling.",
    stack: ["C++20", "Vulkan", "Velos RHI", "Flecs", "ImGui", "GLSL"],
    sections: [
      {
        title: "Meshlet rendering",
        body: "Meshes are partitioned into small groups of triangles with meshoptimizer and rendered through a Vulkan mesh shader. A meshlet color view makes those groups visible across the scene.",
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
        body: "A frame graph organizes rendering passes and resources, including resource transitions and queue synchronization. The renderer manages GPU state through Velos and its Vulkan backend.",
      },
      {
        title: "Scene editor",
        body: "An ImGui editor provides entity selection, transform and light inspection, and a fly camera. Scenes can be saved to JSON, while play mode snapshots and restores the scene when stopped.",
      },
      {
        title: "Application layers",
        body: "Sandbox and Editor build on the same public engine API. Layers extend application behavior while the engine owns the main loop, input, windowing, and optional ImGui lifecycle.",
      },
    ],
  },
};
