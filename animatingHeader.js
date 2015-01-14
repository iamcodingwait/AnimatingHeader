 var changeBackgroundColor = function ()
            {
                $( window ).scroll( function ()
                {
                    var currentWindowPosition = $( window ).scrollTop();
                    if ( currentWindowPosition > 50)
                    {
                       
                        $( '.nav' ).animate( { backgroundColor: '#479bf6' }, 1000 );
                        
                    }
                    if ( currentWindowPosition < 50 )
                    {
                       
                        $( '.nav' ).animate( { backgroundColor: 'transparent' }, 500 );
                      
                    }
                } )
            };
            changeBackgroundColor();
