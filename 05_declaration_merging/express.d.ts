declare namespace Express {
  export interface Request {
    query: { [key: string]: string },
    params: string[],
    body: any
  }
  
  export interface Response {
    json: (payload: any) => void;
    send: (payload: string) => void;
    status: (code: number) => Response;
  }
  
  type Endpoint = (req: Request, res: Response) => void;
  
  export interface Router {
    get: (...func: Endpoint[]) => void,
    post: (...func: Endpoint[]) => void,
  }
}