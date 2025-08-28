export type TSuccessResponce<T> = {
  status: number,
  data: T,
}

export type TErrorResponce = {
  status?: number;
  message?: string;
  code?: string;
  name: string,
  response: {
    data: {
      errors?: { [key: string]: string[] };
      message?: string;
    },
    status: number,
    statusText: string
  }
};

export type TAPIResponce<T> = TSuccessResponce<T> | TErrorResponce

export type projectsType = 
    {
        id: number,
        image: string,
        title: string,
        lang_tools: string,
        description:string[],
        description_sub:string,
        git_hub: string,
        live_host:string
    }
