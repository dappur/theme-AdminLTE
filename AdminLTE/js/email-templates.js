$(document).ready(function() {
    var e;
    CKEDITOR.config.extraPlugins = "justify,colordialog", CKEDITOR.on("instanceReady", function(t) {
        t.editor.on("focus", function(t) {
            e = "html"
        })
    }), CKEDITOR.replace("html", {
        skin: "kama"
    }), $("#subject").focus(function() {
        e = "subject"
    }), $(document).on("click", ".placeholder-insert", function() {
        if ("html" == e && CKEDITOR.instances.html.insertHtml($(this).attr("data-insert")), "plain_text" == e) {
            var t = (o = jQuery("#plain_text"))[0].selectionStart,
                n = o.val();
            o.val(n.substring(0, t) + $(this).attr("data-insert") + n.substring(t))
        }
        if ("subject" == e) {
            var o = jQuery("#subject"),
                t = o[0].selectionStart,
                n = o.val();
            o.val(n.substring(0, t) + $(this).attr("data-insert") + n.substring(t))
        }
    }), $(document).on("click", "#add-placeholder-custom", function() {
        swal({
            title: "Add Custom Data Field",
            input: "text",
            showCancelButton: !0,
            confirmButtonText: "Submit",
            showLoaderOnConfirm: !0,
            preConfirm: function(e) {
                return new Promise(function(t, n) {
                    e == e.match("^[a-z0-9_]*$") ? ($("#custom-placeholder-row").is(":visible") || $("#custom-placeholder-row").show(), $("#custom-placeholder-row").append('<div style="float: left; margin: 5px;"><span class="btn btn-default placeholder-insert placeholder-custom" data-insert="{{ ' + e + ' }}">{{ ' + e + ' }}</span><span class="btn btn-danger placeholder-delete"><i class="fa fa-close"></i></span><input type="hidden" name="placeholders[]" value="' + e + '"></div>'), t()) : n("Data field be alphanumeric with underscores.")
                })
            },
            allowOutsideClick: !1
        }).then(function(e) {
            swal({
                type: "success",
                title: "Custom Data Field Added!",
                html: "[[ " + e + " ]]"
            }), $("body").getNiceScroll().resize()
        })
    }), $(document).on("click", ".placeholder-delete", function() {
        $(this).parent().remove(), 1 == $("#custom-placeholder-row").children().length && ($("#custom-placeholder-row").hide(), $("body").getNiceScroll().resize())
    }), $(document).on("mousedown", "#cke_1_resizer", function(e) {
        $(document).mousemove(function() {
            $("body").getNiceScroll().resize()
        })
    }), $(document).on("click", "#send-test", function(e) {
        var t = $("#subject").val(),
            n = CKEDITOR.instances.html.getData()
        swal({
            title: "Would you like to send a test email to yourself?",
            type: "question",
            showCancelButton: !0,
            confirmButtonText: "Send",
            showLoaderOnConfirm: !0,
            preConfirm: function() {
                return new Promise(function(e, s) {
                    DappurCSRF.csrfAjax("/dashboard/email/test", {
                        subject: t,
                        html: n
                    }, function(t) {
                        parsed = jQuery.parseJSON(t), "error" == parsed.status ? s("An error occurred sending your test email.") : e()
                    })
                })
            },
            allowOutsideClick: !1
        }).then(function() {
            swal({
                type: "success",
                title: "Test mail has been successfully sent."
            })
        })
    })
});