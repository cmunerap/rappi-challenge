import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() initial: boolean;
  @Output() changed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onValueChange(e) {
    this.changed.emit(e.target.checked);
  }

}
