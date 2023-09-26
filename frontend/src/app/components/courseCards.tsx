import Image from "next/image";
import { Course } from "@/app/types";

interface CardProp {
  courses: Course[];
}

export function Card({ courses }: CardProp) {
  console.log(courses);

  if (!courses || courses.length === 0) {
    return (
      <div className="flex h-full flex-col items-center filter grayscale justify-center">
        <Image src="/logo_sm.png" width={200} height={200} alt="Logo XGROW" />
        <div className="text-lg font-bold text-white mt-10">
          Você ainda não possui cursos!
        </div>
        <div className="text-md text-slate-400 mt-4">
          Quando você cadastrar novos cursos, eles aparecerão aqui.
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 m-5">
      {courses.map((course) => (
        <div key={course.id} className="bg-course-tt h-38 rounded-md flex p-3">
          <Image
            src={course.photo || "/img.png"}
            width={134}
            height={134}
            alt="Logo curso"
          />
          <div className="flex flex-col ms-3">
            <div>{course.name}</div>
            <div className="my-auto flex ">
              <div className="border-r pe-5">Tipo: {course.type}</div>
              <div className="bg-gray-100 ms-5 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {course.category}
              </div>
            </div>
            <button className="bg-green-1 p-1 px-8 rounded-lg">
              Acessar área de aprendizagem
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
