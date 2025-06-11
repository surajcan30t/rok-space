import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

export function FlipCard({ th, title, description, bigDescHead, bigDesc }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flip-card" onMouseLeave={() => setOpen(false)}>
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front flex items-center font-family-mono text-3xl">
            <div className="w-full text-right">
              {th} <br />
              <span className="text-4xl">{title}</span>
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back">
            <div className="font-family-mono">
              {th} {title}
            </div>
            <div style={{ fontSize: "0.85rem" }} className="text-center">
              {description}
            </div>
            <Sheet side="left">
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-slate-800 border-0"
                >
                  More
                </Button>
              </SheetTrigger>
              <SheetContent
                className="min-w-screen lg:min-w-[80vw] bg-linear-to-r from-black to-slate-800"
                side="left"
              >
                <ScrollArea className="h-full p-6 flex flex-col gap-y-10 justify-center mt-10 md:pb-20">
                  <h2 className="text-5xl text-zinc-500 font-light text-center mb-10 font-family-mono">
                    ROKSPACE <br />{" "}
                    <span className="text-4xl text-white">
                      {th}
                      <br />
                      {title}
                    </span>
                  </h2>
                  <p className="text-xl font-bold text-center mb-10">
                    {bigDescHead}
                  </p>
                  <p
                    className="text-base font-light text-center"
                    dangerouslySetInnerHTML={{ __html: bigDesc }}
                  ></p>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}
