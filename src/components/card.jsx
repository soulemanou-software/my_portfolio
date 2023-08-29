'use client';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button, Card } from 'flowbite-react';

const  CardWithDecorativeImage = ()=> {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="src/assets/profile1.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
      <Button>
        <p>
          Read more
        </p>
        <AiOutlineArrowRight className="text-2xl" />
      </Button>
    </Card>
  )
}
export default CardWithDecorativeImage;