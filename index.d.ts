import * as i0 from '@angular/core';
import { OnInit, TemplateRef, ModuleWithProviders } from '@angular/core';
import * as i2 from '@angular/common';

interface INgxLoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    fullScreenBackdrop?: boolean;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    [key: string]: string | boolean | undefined;
}
declare class NgxLoadingConfig implements INgxLoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    fullScreenBackdrop?: boolean;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    [key: string]: string | boolean | undefined;
    constructor(config?: INgxLoadingConfig);
}
declare const ngxLoadingAnimationTypes: {
    readonly chasingDots: "chasing-dots";
    readonly circle: "sk-circle";
    readonly circleSwish: "circleSwish";
    readonly cubeGrid: "sk-cube-grid";
    readonly doubleBounce: "double-bounce";
    readonly none: "none";
    readonly pulse: "pulse";
    readonly rectangleBounce: "rectangle-bounce";
    readonly rotatingPlane: "rotating-plane";
    readonly threeBounce: "three-bounce";
    readonly wanderingCubes: "wandering-cubes";
};
declare const EMPTY_NGX_LOADING_CONFIG: INgxLoadingConfig;

declare class NgxLoadingService {
    private config;
    loadingConfig: INgxLoadingConfig;
    constructor(config: INgxLoadingConfig);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxLoadingService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxLoadingService>;
}

declare class NgxLoadingComponent implements OnInit {
    private LoadingService;
    show: boolean;
    config: INgxLoadingConfig;
    template: TemplateRef<Element>;
    private defaultConfig;
    ngxLoadingAnimationTypes: {
        readonly chasingDots: "chasing-dots";
        readonly circle: "sk-circle";
        readonly circleSwish: "circleSwish";
        readonly cubeGrid: "sk-cube-grid";
        readonly doubleBounce: "double-bounce";
        readonly none: "none";
        readonly pulse: "pulse";
        readonly rectangleBounce: "rectangle-bounce";
        readonly rotatingPlane: "rotating-plane";
        readonly threeBounce: "three-bounce";
        readonly wanderingCubes: "wandering-cubes";
    };
    constructor(LoadingService: NgxLoadingService);
    ngOnInit(): void;
    private setupConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxLoadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxLoadingComponent, "ngx-loading", never, { "show": { "alias": "show"; "required": false; }; "config": { "alias": "config"; "required": false; }; "template": { "alias": "template"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NgxLoadingModule {
    static forRoot(): ModuleWithProviders<NgxLoadingModule>;
    static forRoot(config: INgxLoadingConfig): ModuleWithProviders<NgxLoadingModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxLoadingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxLoadingModule, [typeof NgxLoadingComponent], [typeof i2.CommonModule], [typeof NgxLoadingComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxLoadingModule>;
}

export { EMPTY_NGX_LOADING_CONFIG, NgxLoadingComponent, NgxLoadingConfig, NgxLoadingModule, NgxLoadingService, ngxLoadingAnimationTypes };
export type { INgxLoadingConfig };
