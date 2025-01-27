export interface ServeStaticModuleOptions {
  rootPath?: string;
  renderPath?: string;
  serveStaticOptions?: {
    prefix?: string;
    cacheControl?: boolean;
    dotfiles?: string;
    etag?: boolean;
    extensions?: string[];
    immutable?: boolean;
    index?: boolean | string | string[];
    lastModified?: boolean;
    maxAge?: number | string;
    redirect?: boolean;
    setHeaders?: (res: any, path: string, stat: any) => any;
  };
}
