var $ = jQuery.noConflict();
$(document).ready(function(){
    function calculateTotal() {
        let area = parseFloat($('input[name="area"]').val()) || 0;
        let basicPrice = parseFloat($('input[name="basic_price"]').val()) || 0;
        let audaPrice = parseFloat($('input[name="auda_price"]').val()) || 0;
        let plcPrice = parseFloat($('input[name="plc"]').val()) || 0;
        let documentSize = parseFloat($('input[name="document_size"]').val()) || 0;
        let dutyPercent = parseFloat($('input[name="duty"]').val()) || 0;
        let maintenance = parseFloat($('input[name="maintenance"]').val()) || 0;
        let legalCharges = parseFloat($('input[name="legal_charges"]').val()) || 0;

        let basicAmount = area * basicPrice;
        let audaAmount = area * audaPrice;
        let plcAmount = area * plcPrice;
        let stampDutyAmount = (documentSize * dutyPercent) / 100;
        let maintenanceAmount = area * maintenance;
        let legalAmount = legalCharges;
        let total = basicAmount + audaAmount + plcAmount + stampDutyAmount + maintenanceAmount + legalAmount;
        
        $('#total').text('₹ ' + total.toFixed(2));
    }
    $('input').on('input', calculateTotal);
});