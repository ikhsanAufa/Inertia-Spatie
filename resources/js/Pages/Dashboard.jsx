import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// digunakan untuk mengambil modul atau komponen AuthenticatedLayout dari file AuthenticatedLayout yang berada di dalam folder Layouts.

import { Head } from "@inertiajs/react";
// import { Head } → Mengambil komponen Head dari pustaka @inertiajs/react.
// from "@inertiajs/react" → Menunjukkan bahwa komponen tersebut berasal dari pustaka Inertia.js untuk React.

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Selamat datang di tampilan dashboard!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
