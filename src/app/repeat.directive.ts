import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appRepeat]"
})
export class RepeatDirective {
  constructor(private tpl: TemplateRef<any>, private vc: ViewContainerRef) {}

  @Input() set appRepeatIn(val: Array<any>) {
    val.forEach((item, index) => {
      this.vc.createEmbeddedView(this.tpl, {
        $implicit: item,
        index: index,
        even: index % 2 === 0,
        odd: index % 2 === 1
      });
    });
  }
}
