import {
  Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';

interface Line {x: number; y: number; }
interface Position { prevPos: Line; currentPos: Line; }

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas', {static: false}) public canvas: ElementRef;

  width = 500;
  height = 150;
  lines: Position[] = [];
  drawLine: Position[] = [];
  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    canvasEl.width = this.width;
    canvasEl.width  = canvasEl.offsetWidth;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent(canvasEl, 'mousedown')
    .pipe(
      switchMap((e) => {
        return fromEvent(canvasEl, 'mousemove')
          .pipe(
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            pairwise() /* Return the previous and last values as array */
          );
      })
    ).subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(prevPos: Line, currentPos: Line) {
    if (!this.cx) { return; }

    this.cx.beginPath();
    this.lines.push({prevPos, currentPos});
    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  showLines() {
    console.log(this.lines);
  }

  saveLines() {
    localStorage.setItem('lines', JSON.stringify(this.lines));
   }

   resetLines() {
    this.cx.clearRect(0, 0, this.width, this.height);
   }

   loadLines() {
    const rawLine: any = localStorage.getItem('lines');
    console.log(rawLine);
    const lines: Position[] = JSON.parse(rawLine === undefined ? '' : rawLine );
    this.drawLine = lines;
    this.drawLines();
   }

  drawLines() {
   this.drawLine.forEach(({prevPos , currentPos}: Position) => this.drawOnCanvas(prevPos, currentPos));
  }

}
