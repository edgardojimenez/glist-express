/**
 * Created with JetBrains WebStorm.
 * User: ejimenez
 * Date: 7/10/13
 * Time: 11:12 PM
 * To change this template use File | Settings | File Templates.
 */

var glist = (function () {
    'use strict';

    function activeMenu() {
        var i,
            activeMenu = document.querySelector('.hide').textContent,
            menus = document.querySelectorAll('ul.nav li');

        for (i = 0; i < menus.length; ++i) {
            if (menus[i].textContent === activeMenu)
                menus[i].className = 'active';
            else
                menus[i].className = '';
        }
    }

    function displayMessage() {
        var pattern,
            types = ['error', 'info', 'success'],
            message = document.getElementById('message'),
            messageContent = document.getElementById('messageContent').textContent,
            close = document.getElementById('close');

        close.addEventListener('click', function (e) {
            message.classList.add('hide');
        }, false);

        if (messageContent) {
            types.forEach(function (item) {
                pattern = new RegExp(item, 'g');
                if (pattern.test(messageContent)) {
                    message.classList.remove('hide');
                    message.classList.add('alert-' + item);
                }
            });
        }
    }

    function setConfimPrompts() {
        var i,
            buttons = document.querySelectorAll('div.media-body > img.icon-trash');

        for (i = 0; i < buttons.length; ++i) {
            buttons[i].addEventListener('click', function (e) {
                var link = e.srcElement.parentElement;
                confirm('Delete Product',
                    'Are you sure you want to delete the product?',
                    'Cancel',
                    'Ok',
                    function() {
                        link.click();
                    }
                );

            }, false);
        }
    }

    function confirm(heading, question, cancelButtonTxt, okButtonTxt, callback) {

        var confirmModal =
            $('<div class="modal hide">' +
                '<div class="modal-header">' +
                '<a class="close" data-dismiss="modal" >&times;</a>' +
                '<h3>' + heading +'</h3>' +
                '</div>' +

                '<div class="modal-body">' +
                '<p>' + question + '</p>' +
                '</div>' +

                '<div class="modal-footer">' +
                '<a href="#" class="btn" data-dismiss="modal">' +
                cancelButtonTxt +
                '</a>' +
                '<a href="#" id="okButton" class="btn btn-primary">' +
                okButtonTxt +
                '</a>' +
                '</div>' +
                '</div>');

        confirmModal.find('#okButton').click(function() {
            callback();
            confirmModal.modal('hide');
        });

        confirmModal.modal('show');
    };

    return  {
        init: function () {
            activeMenu();
            displayMessage();
            setConfimPrompts();
        },
        confirm: confirm
    };

})();

glist.init();