import { Project } from "../typtings";


export const fetchProject = async() => {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    const data =  await res.json()
    const projects: Project[] = data.skills;

    // console.log("Fetching", projects)
    
    return projects;
}