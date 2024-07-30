// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <div className="hero min-h-[50dvh] bg-base-200" style={{
                backgroundImage: "url(https://www.somosmamas.com.ar/wp-content/uploads/2020/09/recetas-de-almuerzos.jpg)",
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-bold">Bienvenido a AlmuerzaYa</h1>
                        <p className="py-6">
                            La forma más fácil de reservar tus almuerzos para la semana.
                        </p>
                        <div className="stats shadow mb-10">
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Reservas Completadas</div>
                                <div className="stat-value">5,340</div>
                                <div className="stat-desc">Desde el inicio de la plataforma</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Nuevos Usuarios</div>
                                <div className="stat-value">1,800</div>
                                <div className="stat-desc">↗︎ 150 (9%) en el último mes</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-8 w-8 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="stat-title">Menús Disponibles</div>
                                <div className="stat-value">42</div>
                                <div className="stat-desc">Actualizados semanalmente</div>
                            </div>
                        </div>

                        <Link to="/reservation" className="btn btn-primary font-bold w-fit mx-auto">Reserva tu almuerzo ahora</Link>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 min-h-[50dvh]">
                <div className="hero-content text-center  p-10">
                    <div className="">
                        <h1 className="text-5xl font-bold">Descubre Nuestro Servicio</h1>
                        <p className="py-6">
                            Mira cómo funciona nuestro servicio de almuerzos y descubre por qué es la mejor opción para ti.
                        </p>
                        <div className="video-container my-10">
                            <iframe className="w-full max-w-4xl mx-auto" width="560" height="315" src="https://www.youtube.com/embed/6fhAchG-jcw?si=MT4M2DydN9MWLmQ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>



            {/* Features Hero */}
            <div className="hero bg-base-200 min-h-[50dvh]">
                <div className="hero-content text-center p-10">
                    <div className="">
                        <h1 className="text-5xl font-bold">Características</h1>
                        <p className="py-6">
                            Descubre las características únicas de nuestro servicio de almuerzos.
                        </p>
                        {/* Features Section */}
                        <div className="features my-10 flex gap-4 min-w-full text-left max-md:flex-col">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title">Variedad de Menús</h3>
                                    <p>Explora nuestra selección de deliciosos almuerzos preparados por chefs expertos.</p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title">Reserva Fácil</h3>
                                    <p>Elige tus almuerzos y los días que deseas con solo unos clics.</p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title">Alimentación Saludable</h3>
                                    <p>Opciones balanceadas y nutritivas para mantener tu dieta equilibrada.</p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h3 className="card-title">Código QR para Confirmación</h3>
                                    <p>Recibe un código QR único que facilita la confirmación de tu reserva y el check-in.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>






            {/* How It Works Hero */}
            <div
                className="hero min-h-[50dvh]"
                style={{
                    backgroundImage: "url(https://media.sortly.com/wp-content/uploads/2021/12/03180251/iStock-1347940566-1200x628.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-neutral-content text-center p-10">
                    <div className="">
                        <h1 className="text-5xl font-bold">Cómo Funciona</h1>
                        <p className="py-6">
                            Aprende cómo utilizar nuestro servicio de manera fácil y rápida.
                        </p>
                        {/* How It Works Section */}
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-4xl">
                            <li>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 max-md:text-left text-end">
                                    <time className="font-mono italic">1</time>
                                    <div className="text-lg font-black">Elige tus almuerzos favoritos</div>
                                    Explora nuestra selección de deliciosos almuerzos preparados por chefs expertos.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end mb-10 text-left">
                                    <time className="font-mono italic">2</time>
                                    <div className="text-lg font-black">Selecciona los días de reserva</div>
                                    Elige los días que deseas para cada almuerzo, facilitando la planificación de tus comidas.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 max-md:text-left text-end">
                                    <time className="font-mono italic">3</time>
                                    <div className="text-lg font-black">Confirma y paga</div>
                                    Finaliza el proceso confirmando tu reserva y realizando el pago de manera segura.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end mb-10 text-left flex flex-col">
                                    <time className="font-mono italic">4</time>
                                    <div className="text-lg font-black">Recibe tu código QR</div>
                                    <div className="mb-4">Obtén un código QR único que te permitirá confirmar tu reserva y realizar el check-in de manera rápida y sencilla.</div>
                                    <div className="mockup-phone mx-auto border-primary">
                                        <div className="camera"></div>
                                        <div className="display">
                                            <div className="artboard artboard-demo phone-1 flex items-center justify-center ">

                                                <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 ">
                                                    <h2 className="text-xl font-semibold mb-4">Tu Código QR de Reserva</h2>

                                                    <img src="https://th.bing.com/th/id/R.fbd3782b74b283e3a06c44fc7600f0a8?rik=2WUTK7aTKMXbyA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG6.png&ehk=nUlk4YKcz%2fILTzIDicRXimAOjkyFKx9ofIkscb3FFxA%3d&risl=&pid=ImgRaw&r=0" alt="Código QR" className="w-48 h-48" />
                                                    <p className="mt-4 text-center">Escanea este código para confirmar tu reserva.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 max-md:text-left text-end">
                                    <time className="font-mono italic">5</time>
                                    <div className="text-lg font-black">Disfruta de tus almuerzos</div>
                                    Recibe y disfruta de tus almuerzos en las fechas seleccionadas, sin preocupaciones.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 min-h-[50dvh]">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Tabla de Información</h1>
                        <p className="py-6">
                            Aquí tienes una tabla con información detallada sobre nuestras opciones.
                        </p>

                        <div className="overflow-x-auto mb-10">
                            <table className="table table-zebra w-full">
                                {/* Encabezado */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nombre del Almuerzo</th>
                                        <th>Tipo de Comida</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Fila 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>Ensalada César</td>
                                        <td>Entrante</td>
                                        <td>$8.00</td>
                                    </tr>
                                    {/* Fila 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>Pollo al Horno con Papas</td>
                                        <td>Plato Principal</td>
                                        <td>$12.00</td>
                                    </tr>
                                    {/* Fila 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>Tarta de Frutas</td>
                                        <td>Postre</td>
                                        <td>$5.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Home;
