/**
 * Do not modify this file, it will be auto-generated.
 */
import {
    Link,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/**
 * @name iFrame
 * @id e36ab035-8512-4ac4-b68b-4d071212d1de
 */
export abstract class AbstractIFrameComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "link",
     *   "fieldLabel": "Link",
     *   "key": "link",
     *   "label": "link"
     * }
     */
    @RenderingContextBinding('link.link')
    readonly onLink: Observable<Link>;

    /**
     * @see #onLink
     */
    @RenderingContextBinding()
    readonly link: Link;

    /**
     * {
     *   "elementType": "number",
     *   "fieldLabel": "Number",
     *   "fieldType": "integer",
     *   "key": "suggestedwidth",
     *   "label": "suggestedWidth",
     *   "maximum": 5000,
     *   "minimum": 0
     * }
     */
    @RenderingContextBinding('number.suggestedwidth', 0)
    readonly onSuggestedwidth: Observable<number>;

    /**
     * @see #onSuggestedwidth
     */
    @RenderingContextBinding()
    readonly suggestedwidth: number;

    /**
     * {
     *   "elementType": "number",
     *   "fieldLabel": "Number",
     *   "fieldType": "integer",
     *   "key": "suggestedheight",
     *   "label": "suggestedHeight",
     *   "maximum": 5000,
     *   "minimum": 0
     * }
     */
    @RenderingContextBinding('number.suggestedheight', 0)
    readonly onSuggestedheight: Observable<number>;

    /**
     * @see #onSuggestedheight
     */
    @RenderingContextBinding()
    readonly suggestedheight: number;

    protected constructor() {
        super();
    }
}
