export interface Message {
    type: "request" | "send"
    data: number | ChatMessage;
}

export interface ChatMessage {
    id: number;
    timestamp: number;
    text: string;
    file?: File;
    chatId: number;
}


export function SOCKET(
    client: import('ws').WebSocket,
    _request: import('node:http').IncomingMessage,
    server: import('ws').WebSocketServer,
) {
    const { send, broadcast } = createHelpers(client, server);
    console.log("new friend connected!")

    // Relay any message back to other clients
    client.on('message', broadcast);

    // When this client disconnects broadcast a disconnect message
    client.on('close', () => {
        console.log("client has disconnected");
    });
}

function createHelpers(
    client: import('ws').WebSocket,
    server: import('ws').WebSocketServer,
) {
    // send to sending client only
    const send = (payload: unknown) => client.send(JSON.stringify(payload));

    // send to all connected clients
    const broadcast = (payload: unknown) => {
        
        if(payload instanceof Buffer) {
            console.log("haha")
            const cart: Message = JSON.parse(payload.toString());
            console.log(cart)
            if(cart.type == "request") {
                // TODO
            }
            else {
                console.log("broadcast!")
                console.log(cart.data)
                for (const other of server.clients)
                    if (other !== client) other.send(JSON.stringify(cart.data));
            }
        }
    };
    return { send, broadcast };
}
export function GET() {
    const headers = new Headers();
    headers.set('Connection', 'Upgrade');
    headers.set('Upgrade', 'websocket');
    return new Response('Upgrade Required', { status: 426, headers });
}