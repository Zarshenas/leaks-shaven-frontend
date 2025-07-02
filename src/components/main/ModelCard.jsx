import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Share2, MoreVertical, Link2, Archive } from "lucide-react";
import React from "react";
import { convertDate } from "../../utils/dateConvertor";
import { Link } from "react-router";
import LazyImage from "../LazyImage";

function ModelCard({ model }) {
  return (
    <Card className="w-[360px] rounded-2xl border-none px-8">
      <CardHeader className="p-0">
        <CardTitle className="text-lg">{model.title}</CardTitle>
        <div className="text-sm text-neutral-400 space-y-1 mt-2">
          <div className="flex items-center gap-4">
            {model.categories.map((category) => (
              <div key={category.id} className="flex items-center gap-1">
                <Archive className="w-4 h-4" />
                <span>{category.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-1">
              <Upload className="w-4 h-4" />
              <span>{convertDate(model.publish_date, "dd/MM/yyyy")}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Link to={model.download_url} target="_blank">
          <div className="w-full h-[400px] overflow-hidden rounded-lg ">
            <LazyImage
              src={model.image_url}
              alt={model.title}
              className="w-full rounded-lg object-fill h-[400px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      </CardContent>

      <CardFooter className="mt-2 p-0">
        <Link className="w-full" to={model.download_url} target="_blank">
          <Button className="w-full" variant="outline">
            <Link2 />
            Open Link
          </Button>
        </Link>
        {/* <Button variant="outline">
          <MoreVertical />
          More
        </Button>
        <Button variant="outline" size="icon">
          <Share2 />
        </Button> */}
      </CardFooter>
    </Card>
  );
}

export default ModelCard;
