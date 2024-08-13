import Swal from "sweetalert2"; // Ensure SweetAlert2 is imported

const Swetalert = (id, onConfirm) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this product!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33", // Customize confirm button color
        cancelButtonColor: "#6c757d", // Customize cancel button color
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        customClass: {
            container: "my-swal-container",
            header: "my-swal-header",
            title: "my-swal-title",
            content: "my-swal-content",
            actions: "my-swal-actions",
            confirmButton: "my-swal-confirm-button",
            cancelButton: "my-swal-cancel-button",
        },
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm(id); // Call the provided onConfirm function with the id
            Swal.fire("Deleted!", "The product has been deleted.", "success");
        } else {
            Swal.fire("Cancelled", "The product is safe.", "error");
        }
    });
};

export default Swetalert;
