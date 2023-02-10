import {
  Directive,
  EventEmitter,
  Output,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDragdrop]'
})
export class DragdropDirective {

  @Output() fileDropped = new EventEmitter<FileList>();
  @HostBinding('style.background-color') private background = '#ffffff';
  // Dragover Event
  @HostListener('dragover', ['$event']) dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#e2eefd';
  }
  // Dragleave Event
  @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#ffffff';
  }
  // Drop Event
  @HostListener('drop', ['$event']) public drop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#ffffff';
    console.log("test ",event)
    const files = event.dataTransfer?.files;
    if (files!=undefined && files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
