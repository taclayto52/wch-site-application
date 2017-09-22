import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { AbstractIFrameComponent } from './abstractIFrameComponent';

/**
 * @name iFrame
 * @id e36ab035-8512-4ac4-b68b-4d071212d1de
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-i-frame-component',
  templateUrl: './typeIFrameComponent.html',
  styleUrls: ['./typeIFrameComponent.scss']
})
*/
export class TypeIFrameComponent extends AbstractIFrameComponent {

    /**
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
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
