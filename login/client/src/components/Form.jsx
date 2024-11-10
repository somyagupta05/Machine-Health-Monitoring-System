import React from "react";

function Form() {
  return (
    <>
      <section>
        <div class="container mt-5" id="form">
          <h2 class="text-center mb-4">Input Form</h2>
          <form>
            <div class="mb-3">
              <label for="airTemperature" class="form-label">
                <strong>Air Temperature (°C)</strong>
              </label>
              <input
                type="number"
                class="form-control"
                id="airTemperature"
                placeholder="Enter air temperature"
                required
              />
            </div>

            <div class="mb-3">
              <label for="processTemperature" class="form-label">
                <strong>Process Temperature (°C)</strong>
              </label>
              <input
                type="number"
                class="form-control"
                id="processTemperature"
                placeholder="Enter process temperature"
                required
              />
            </div>

            <div class="mb-3">
              <label for="rotationalSpeed" class="form-label">
                <strong>Rotational Speed (RPM)</strong>
              </label>
              <input
                type="number"
                class="form-control"
                id="rotationalSpeed"
                placeholder="Enter rotational speed"
                required
              />
            </div>

            <div class="mb-3">
              <label for="torque" class="form-label">
                <strong>Torque (Nm)</strong>
              </label>
              <input
                type="number"
                class="form-control"
                id="torque"
                placeholder="Enter torque"
                required
              />
            </div>

            <div class="mb-3">
              <label for="toolWear" class="form-label">
                <strong>Tool Wear (mm)</strong>
              </label>
              <input
                type="number"
                class="form-control"
                id="toolWear"
                placeholder="Enter tool wear"
                required
              />
            </div>
            <label for="toolWear" class="form-label">
              <strong>Type</strong>
            </label>
            <select id="options" name="options">
              <option value="1">1 (High)</option>
              <option value="2">2 (Medium)</option>
              <option value="3">3(Low)</option>
            </select>

            <button type="submit" class="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Form;

// air temperature,process temperATURE, rotational speed , tork , tool wear,
