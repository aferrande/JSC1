const toggleProjects = () => { 
    let dashboard = getById("dashboard");
    toggleAttribute(dashboard, offscreen);
}