import { Injectable } from '@nestjs/common';
import Game from './Game';

@Injectable()
export class GameService {
	public games: Array<Game>;
}