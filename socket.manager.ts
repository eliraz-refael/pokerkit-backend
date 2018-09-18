import { Socket } from 'socket.io';

class SocketManager {
	public socket: Socket;

	public constructor(socket: Socket) {
		this.socket = socket;
	}

	public onConnection(): void {

	}
}