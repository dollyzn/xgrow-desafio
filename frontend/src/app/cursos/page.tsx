"use client";

import { useEffect, useState } from "react";
import { Card } from "../components/courseCards";
import { Search, Add } from "@mui/icons-material";
import { Course } from "../types";
import { useAuth } from "../context/authContext";
import { ProtectedRoute } from "../components/protectedRoute";

export default function Curso() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const { token } = useAuth();

  console.log(token);

  async function fetchCourses() {
    const response = await fetch("http://localhost:3001/course", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (Array.isArray(data)) {
      return data;
    } else {
      return [];
    }
  }

  useEffect(() => {
    async function getCourses() {
      const coursesData = await fetchCourses();
      setCourses(coursesData);
      setFilteredCourses(coursesData);
    }
    getCourses();
  }, []);

  useEffect(() => {
    const filtered = courses.filter((course) =>
      course.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCourses(filtered);
    console.log(filtered);
  }, [searchValue, courses]);

  console.log(filteredCourses);

  return (
    <ProtectedRoute>
      <div className="bg-course-body h-course flex flex-col">
        <div className="bg-course-tt m-5 p-4  rounded-md flex items-center">
          <div className="text-3xl font-medium">Meus cursos</div>

          <div className="ml-auto flex items-center">
            <div className=" mx-5 border-l border-gray-600 h-6"></div>
            <div className="relative">
              <input
                className="px-4 py-2 w-72 bg-zinc-800 border-b text-w text-sm font-normal focus:outline-none"
                placeholder="Pesquise pelo nome..."
                type="text"
                name="search"
                id="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search
                className="absolute bottom-2 right-2"
                style={{ color: "#93BC1E" }}
              />
            </div>
          </div>
          <div className=" mx-5 border-l border-gray-600 h-6"></div>
          <div className="flex items-center">
            <div className="text-xs flex items-center">
              VISUALIZAÇÃO:
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                className="ms-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.58337 5.41667H22.75V7.58333H7.58337V5.41667ZM7.58337 14.0833V11.9167H22.75V14.0833H7.58337ZM4.33337 4.875C4.76435 4.875 5.17768 5.0462 5.48242 5.35095C5.78717 5.6557 5.95837 6.06902 5.95837 6.5C5.95837 6.93098 5.78717 7.3443 5.48242 7.64905C5.17768 7.9538 4.76435 8.125 4.33337 8.125C3.9024 8.125 3.48907 7.9538 3.18433 7.64905C2.87958 7.3443 2.70837 6.93098 2.70837 6.5C2.70837 6.06902 2.87958 5.6557 3.18433 5.35095C3.48907 5.0462 3.9024 4.875 4.33337 4.875ZM4.33337 11.375C4.76435 11.375 5.17768 11.5462 5.48242 11.851C5.78717 12.1557 5.95837 12.569 5.95837 13C5.95837 13.431 5.78717 13.8443 5.48242 14.149C5.17768 14.4538 4.76435 14.625 4.33337 14.625C3.9024 14.625 3.48907 14.4538 3.18433 14.149C2.87958 13.8443 2.70837 13.431 2.70837 13C2.70837 12.569 2.87958 12.1557 3.18433 11.851C3.48907 11.5462 3.9024 11.375 4.33337 11.375ZM7.58337 20.5833V18.4167H22.75V20.5833H7.58337ZM4.33337 17.875C4.76435 17.875 5.17768 18.0462 5.48242 18.351C5.78717 18.6557 5.95837 19.069 5.95837 19.5C5.95837 19.931 5.78717 20.3443 5.48242 20.649C5.17768 20.9538 4.76435 21.125 4.33337 21.125C3.9024 21.125 3.48907 20.9538 3.18433 20.649C2.87958 20.3443 2.70837 19.931 2.70837 19.5C2.70837 19.069 2.87958 18.6557 3.18433 18.351C3.48907 18.0462 3.9024 17.875 4.33337 17.875Z"
                  fill="#646D85"
                />
              </svg>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                className="ms-2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 11.9167H11.9167V3.25H3.25V11.9167ZM3.25 22.75H11.9167V14.0833H3.25V22.75ZM14.0833 22.75H22.75V14.0833H14.0833V22.75ZM14.0833 3.25V11.9167H22.75V3.25"
                  fill="#93BC1E"
                />
              </svg>
            </div>
            <button className="bg-green-1 font-bold text p-3 ms-20 flex items-center px-6 rounded-lg">
              <Add className="me-3" fontSize="small" />
              Novo curso
            </button>
          </div>
        </div>
        <Card courses={filteredCourses} />
      </div>
    </ProtectedRoute>
  );
}
