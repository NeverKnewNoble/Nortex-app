frappe.ui.form.on("Devices", "refresh", function(frm) {
    frm.add_custom_button(__("Say Hi"), function() {
		//add additional queries here
		console.log("hi from the javascript console")

    });
});


// DEVICES CHILD TABLE
