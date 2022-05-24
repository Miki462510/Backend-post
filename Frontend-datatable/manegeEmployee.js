(document).ready(function() {
    $('#example').DataTable({
        processing: true,
        serverSide: true,
        ajax: {
            url: 'http://localhost:8080',
            type: 'POST',
        },
        columns: [
            { data: 'id' },
            { data: 'firstName' },
            { data: 'lastName' },
            { data: 'birthDate' },
            { data: 'hireDate' },
            { data: 'gender' },
        ],
    });
});