import express from 'express';
import SocketIO from 'socket.io';
import { Server } from 'http';

export const http = new Server(express);
export const io = SocketIO(http);