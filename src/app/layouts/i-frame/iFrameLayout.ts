import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeIFrameComponent } from './../../components/i-frame/typeIFrameComponent';

/**
 * @name iFrameLayout
 * @id i-frame-layout
 */
@LayoutComponent({
    selector: 'i-frame-layout'
})
@Component({
  selector: 'app-i-frame-layout-component',
  templateUrl: './iFrameLayout.html',
  styleUrls: ['./iFrameLayout.scss']
})
export class IFrameLayoutComponent extends TypeIFrameComponent {

    /**
     * TODO add custom fields here. These fields should be those
     * specific to this layout.
     */

    constructor() {
        super();
        /**
        * TODO initialize your custom fields here, note that
        * you can refer to the values bound via @RenderingContextBinding from
        * your super class.
        *
        * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
        */
    }

}
