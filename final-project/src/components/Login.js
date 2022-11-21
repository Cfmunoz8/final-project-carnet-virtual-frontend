import React from "react";
import { Link, useParams } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="container border my-3 ">
                    <h2 className="mx-auto text-center p-3">Sing in</h2>
                <div className="mx-auto text-center my-5">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputUser" class="form-label">User</label>
                            <input type="text" class="form-control" id="exampleInputUser" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;