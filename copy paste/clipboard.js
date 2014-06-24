/**
 * Clipboard text handling with a get and set function
 * clipboard.get() // get text from the clipboard
 * clipboard.set( 'text' ) // set the clipboard to the given text
 * 
 * @type {Object}
 */
var clipboard = {
    // store the pasetboard object
    pasteBoard : null,

    // save the pasteboard object
    init : function()
    {
        this.pasteBoard = NSPasteboard.generalPasteboard();
    },
    // set the clipboard to the given text
    set : function( text )
    {
        if( typeof text === 'undefined' ) return null;

        if( !this.pasteBoard )
            this.init();

        this.pasteBoard.declareTypes_owner( [ NSPasteboardTypeString ], null );
        this.pasteBoard.setString_forType( text, NSPasteboardTypeString );

        return true;
    },
    // get text from the clipbaoard
    get : function()
    {
        if( !this.pasteBoard )
            this.init();

        var text = this.pasteBoard.stringForType( NSPasteboardTypeString );
        
        return text.toString();
    }
};