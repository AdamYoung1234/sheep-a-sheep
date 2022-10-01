import { Image } from 'react-konva'
import * as fromConstants from '../utils/constants'

const Card = ({card, assets, onClick}) => {
    const { rolNum: col, rowNum: row, type } = card;
    const { PIXEL_RATIO, CARD_HEIGHT, CARD_WIDTH } = fromConstants;

    return (
      <Image
        onClick={onClick}
        image={assets[type]}
        x={col * PIXEL_RATIO}
        y={row * PIXEL_RATIO}
        width={CARD_WIDTH - 3}
        height={CARD_HEIGHT - 3}
        stroke="#000"
        strokeWidth={3}
      />
    );
  }

export default Card

