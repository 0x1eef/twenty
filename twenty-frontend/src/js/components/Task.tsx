import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Select } from "/components/forms/Select";
import { useUpsertTask } from "/hooks/useUpsertTask";
import { useConnections } from "/hooks/useConnections";
import { Task } from "/types/schema";
import showdown from "showdown";

type Inputs = {
  id?: number;
  title: string;
  content: string;
  connectionId: number;
};

export function Task({ task }: { task?: Task }) {
  const { register, handleSubmit, watch, setValue: set } = useForm<Inputs>();
  const [isEditable, setIsEditable] = useState<boolean>(!task);
  const selectRef = useRef<HTMLSelectElement>(null);
  const upsert = useUpsertTask();
  const [connections] = useConnections();
  const c = new showdown.Converter();
  const content = watch("content");
  const onSave = (input: Inputs) => {
    upsert({ input }).then(() => {
      location.href = "/tasks/";
    });
  };

  useEffect(() => {
    set("connectionId", 1);
  }, []);

  return (
    <form className="task" onSubmit={handleSubmit(onSave)}>
      <input type="hidden" value={task?.id} {...register("id")} />
      <div className="table">
        <div className="table tabbed div">
          <ul className="tabs">
            <li onClick={() => setIsEditable(true)}>Write</li>
            <li onClick={() => setIsEditable(false)}>Preview</li>
          </ul>
        </div>
        <div className="table content">
          <div>
            <Select
              {...register("connectionId")}
              ref={selectRef}
              className="form"
            >
              {connections.map((conn, key) => {
                return (
                  <option key={key} value={conn.id}>
                    {conn.name}
                  </option>
                );
              })}
            </Select>
          </div>
          <div>
            <input
              className="form"
              type="text"
              placeholder="Title"
              defaultValue={task?.title}
              {...register("title", { required: true })}
            />
          </div>
          {isEditable ? (
            <>
              <div className="row textarea">
                <textarea
                  className="form"
                  placeholder="Add your description heren"
                  defaultValue={task?.content}
                  {...register("content", { required: true })}
                />
              </div>
              <div className="row">
                <input className="form" type="submit" value="Save" />
              </div>
            </>
          ) : (
            <div
              className="task content"
              dangerouslySetInnerHTML={{
                __html: c.makeHtml(content || task?.content),
              }}
            />
          )}
        </div>
      </div>
    </form>
  );
}