// Generated by dts-bundle-generator v5.6.0

export declare class TsPdfViewer {
	private readonly _visibleAdjPages;
	private _container;
	private _viewerContainer;
	private _pdfLoadingTask;
	private _pdfDocument;
	private _pagesContainer;
	private _pageCanvases;
	private _pagesVisible;
	private _pageCurrent;
	constructor(containerSelector: string, workerSrc: string);
	destroy(): void;
	openPdfAsync(path: string): Promise<void>;
	closePdfAsync(): Promise<void>;
	private initViewerGUI;
	private onPdfLoadingProgress;
	private onPdfLoaded;
	private refreshPageCanvases;
	private renderVisiblePagesAsync;
	private refreshPageView;
	private getVisiblePages;
	private getCurrentPage;
	private renderPageAsync;
	private clearRenderedPage;
}

export {};