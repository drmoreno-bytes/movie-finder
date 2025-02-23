export const parseAPIError = (error: unknown):{
    status: number;
    statusText: string;
} => {
    if (error instanceof Error && error.message) {
        if (error.message.includes('{')) {
            try {
                const message = JSON.parse(error.message) as {
                    status: number;
                    statusText: string;
                };
                if (message.status) {
                    return {
                        status: message.status,
                        statusText: message.statusText,
                    };
                }
            } catch {
                return {
                    status: 500,
                    statusText: error.message,
                };
            }
            return {
                status: 500,
                statusText: error.message,
            };
        }
        return {
            status: 500,
            statusText: error.message,
        };
    }

    return {
        status: 500,
        statusText: 'Internal Server Error',
    };
};
