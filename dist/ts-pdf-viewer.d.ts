// Generated by dts-bundle-generator v5.6.0

export declare class TsPdfViewer {
	private readonly _visibleAdjPages;
	private readonly _minScale;
	private readonly _maxScale;
	private _scale;
	private _container;
	private _shadowRoot;
	private _viewerContainer;
	private _pdfLoadingTask;
	private _pdfDocument;
	private _pagesContainer;
	private _pages;
	private _currentPage;
	private _mousePos;
	private _mouseInCenterTimer;
	private _panelsHidden;
	constructor(containerSelector: string, workerSrc: string);
	destroy(): void;
	openPdfAsync(src: string | Uint8Array): Promise<void>;
	closePdfAsync(): Promise<void>;
	private initViewerGUI;
	private onPdfLoadingProgress;
	private onPdfLoadedAsync;
	private onPdfClosedAsync;
	private refreshPagesAsync;
	private renderVisiblePagesAsync;
	private scrollToPage;
	private setScaleAsync;
	private zoomOut;
	private zoomIn;
	private onPagesContainerScroll;
	private onPagesContainerMouseMove;
	private onPagesContainerWheel;
	private onPaginatorInput;
	private onPaginatorChange;
	private onPaginatorPrevClick;
	private onPaginatorNextClick;
	private onZoomOutClick;
	private onZoomInClick;
	private onZoomFitViewerClick;
	private onZoomFitPageClick;
	private getVisiblePages;
	private getCurrentPage;
}

export {};
