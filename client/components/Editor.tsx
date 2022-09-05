import React from "react";
import EditorJS from "@editorjs/editorjs";

const Editor = () => {
  const [editor, setEditor] = React.useState<EditorJS | null>(null);

  React.useEffect(() => {
    setEditor((prevEditor) => {
      if (!prevEditor) {
        return new EditorJS({
          holder: "editor",
          placeholder: "Введите текст вашей статьи",
        });
      }
      return null;
    });
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, []);

  return <div id="editor" />;
};

export default Editor;
