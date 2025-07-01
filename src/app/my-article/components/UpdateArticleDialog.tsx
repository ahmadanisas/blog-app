import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormInput from "@/components/core/FormInput";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IUpdateArticleDialogProps {
  data: any;
}

const UpdateArticleDialog: React.FunctionComponent<
  IUpdateArticleDialogProps
> = (props) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Article</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div>
            <FormInput type="text" name="title" label="Title" />
            <FormInput type="text" name="thumbnail" label="Thumbnail" />
            <div>
              <label className="mb-2 font-medium">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent></SelectContent>
              </Select>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default UpdateArticleDialog;
