export class ComponentResponse {
    public sessionId:any;
    public data:any;
    public date:any;
    public componentName:any;

    setSessionId()
    {
        this.sessionId = Math.random().toString(16).substr(2, 8);
    }
    setComponentName(name:string)
    {
        this.componentName = name;
    }
    defaultInitialization(componentName:string)
    {
        this.setSessionId();
        this.setComponentName(componentName);
    }
    setCurrentDate()
    {
        this.date = new Date();
    }
}
