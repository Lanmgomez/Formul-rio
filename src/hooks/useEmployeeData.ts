export const useEmployeeData = () => {

    const issuing_body = [
        { id: '1', key: '1', value: 'SP' },
        { id: '2', key: '2', value: 'RJ' },
        { id: '3', key: '3', value: 'MG' }
    ];

    const uf_options = [
        { id: '1', key: '1', value: 'SP' },
        { id: '2', key: '2', value: 'RJ' },
        { id: '3', key: '3', value: 'MG' }
    ];

    const laboral_activities = [
        { id: '1', key: '1', value: 'Acionista' },
        { id: '2', key: '2', value: 'CEO' },
        { id: '3', key: '3', value: 'Gerente' }
    ];

    const responsible_company = [
        { id: '1', key: '1', value: 'Renner' },
        { id: '2', key: '2', value: 'Marisa' },
        { id: '3', key: '3', value: 'Equatorial' }
    ];

    return {
        issuing_body,
        uf_options,
        laboral_activities,
        responsible_company
    };
};