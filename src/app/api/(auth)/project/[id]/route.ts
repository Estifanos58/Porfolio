import Project from "../../../../../lib/model/project";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    try {
        const project = await Project.findById(id);
        if (!project) {
        return new Response("Project not found", { status: 404 });
        }
        return new Response(JSON.stringify(project), { status: 200 });
    } catch (error) {
        console.error("Error fetching project:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}