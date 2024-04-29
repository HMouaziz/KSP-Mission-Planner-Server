import sys
import json
from math import sqrt, sin, radians, cos


def calculate_eclipse(radius, ap, pe, std_grav, inclination_degree):
    R = radius
    Ra = ap + R
    Rp = pe + R
    inclination = radians(inclination_degree)
    a = (Ra + Rp) / 2
    b = sqrt(Ra * Rp)
    e = (Ra - Rp) / (Ra + Rp)
    l = (2 * (Ra * Rp)) / (Ra + Rp)
    u = std_grav
    h = sqrt(l * u)

    adjusted_b = b * cos(inclination)

    sin_value = sin(R / adjusted_b)
    if sin_value == 0:
        raise ValueError("Calculation error due to division by zero in the sine function.")

    res = ((2 * a * adjusted_b) / h) * (1 / sin_value + (e * R / adjusted_b))

    visualization_data = {
        'semi_major_axis': a,
        'semi_minor_axis': adjusted_b,
        'inclination': inclination_degree,
        'eccentricity': e
    }

    return res, visualization_data


if __name__ == '__main__':
    input_data = json.loads(sys.argv[1])
    body_radius = input_data['body']['radius']
    apoapsis = input_data['apoapsis']
    periapsis = input_data['periapsis']
    std_grav_param = input_data['body']['stdGravParam']
    inclination_deg = input_data['inclination']

    try:
        result, vis_data = calculate_eclipse(body_radius, apoapsis, periapsis, std_grav_param, inclination_deg)
        print(json.dumps({'status': 200, 'result': result, 'visualization': vis_data}))
    except ValueError as e:
        print(json.dumps({'status': 400, 'error': str(e)}))
