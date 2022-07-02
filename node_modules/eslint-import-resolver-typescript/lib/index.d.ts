import { ResolveOptions } from 'enhanced-resolve';
export declare const interfaceVersion = 2;
export interface TsResolverOptions extends Omit<ResolveOptions, 'fileSystem' | 'useSyncFileSystemCalls'> {
    alwaysTryTypes?: boolean;
    project?: string[] | string;
    extensions?: string[];
    packageFilter?: (pkg: Record<string, string>) => Record<string, string>;
    conditionNamesMapper?: Record<string, string[]>;
}
/**
 * @param {string} source the module to resolve; i.e './some-module'
 * @param {string} file the importing file's full path; i.e. '/usr/local/bin/file.js'
 * @param {TsResolverOptions} options
 */
export declare function resolve(source: string, file: string, options?: TsResolverOptions | null): {
    found: boolean;
    path?: string | null;
};
