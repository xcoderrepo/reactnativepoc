import { NativeModules } from 'react-native';

const { TokenManager } = NativeModules;

export enum TokenType {client, user, userOrClient}

function buildHeader(token: string): Headers {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
   // headers.append("Authorization", `bearer ${token}`);
    return headers;
}

export async function getJSON(url: string, tokenType: TokenType = TokenType.user): Promise<any> {
    const startLogDate = new Date();

    try {
        const headers = buildHeader("");

        const response = await fetch(url, {
            headers,
            method: "GET"
        });

        if (!response.ok) {
            throw Error(`Call to ${url} received error status code: ${response.status}`);
        } else {
            return await response.json();
        }

    } catch (error) {
        throw error;
    } finally {
      //  LoggerService.trackNetworkStats(url, startLogDate, new Date());
    }
}

async function sendJSON<T>(url: string, method: string, params: T, tokenType: TokenType = TokenType.user): Promise<any> {
    const startLogDate = new Date();

    try {
        const token = await TokenManager.getToken(TokenType[tokenType]);
        const headers = buildHeader(token);

        const response = await fetch(url, {
            body: JSON.stringify(params),
            headers,
            method
        });

        if (!response.ok) {
            const text = await response.text();
            let errorMessage: string;
            if (text) {
                const errorResponse = JSON.parse(text);
                errorMessage = errorResponse && (errorResponse.message || errorResponse.Message);
            }
            // if (errorMessage) {
            //     throw new HttpError(response.status, errorMessage.trim());
            // }
            // throw new HttpError(response.status, `Call to ${url} received error status code: ${response.status}`);
        } else {
            console.log(response.headers);
            const text = await response.text();
            if (text) {
                return JSON.parse(text);
            }
            return {};
        }

    } catch (error) {
        throw error;
    } finally {
    //    LoggerService.trackNetworkStats(url, startLogDate, new Date());
    }
}

export async function postJSON<T>(url: string, params: T, tokenType: TokenType = TokenType.user): Promise<any> {
    return sendJSON(url, "POST", params, tokenType);
}

export async function putJSON<T>(url: string, params: T, tokenType: TokenType = TokenType.user): Promise<any> {
    return sendJSON(url, "PUT", params, tokenType);
}
