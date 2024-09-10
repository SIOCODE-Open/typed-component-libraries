import { useState, useEffect } from "react";
import {
    IBuildBadgeProps,
    BuildBadgeField,
    BUILD_BADGE_FIELD_NAMES,
    BuildBadge,
} from "component-library";

const BUILD_BADGE_FIELD_NAMES_LIST = Object.keys(
    BUILD_BADGE_FIELD_NAMES
) as Array<BuildBadgeField>;

const BUILD_DEFAULT_DATA = {
    buildNumber: 0,
    date: "",
    status: "",
};

export function BuildBadgeDemo() {
    const [demoField, setDemoField] = useState<BuildBadgeField>(
        BUILD_BADGE_FIELD_NAMES_LIST[0]
    );
    const [demoDanger, setDemoDanger] = useState<boolean>(false);
    const [demoWarning, setDemoWarning] = useState<boolean>(false);
    const [demoInfo, setDemoInfo] = useState<boolean>(false);
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(BUILD_DEFAULT_DATA, null, 2)
    );
    const [demoDataObject, setDemoDataObject] =
        useState<any>(BUILD_DEFAULT_DATA);
    const [demoDataParseError, setDemoDataParseError] = useState<string | null>(
        null
    );

    // Try to update the demo data object when the JSON changes
    useEffect(() => {
        try {
            setDemoDataObject(JSON.parse(demoDataJson));
            setDemoDataParseError(null);
        } catch (error) {
            setDemoDataParseError(error.message);
        }
    }, [demoDataJson]);

    return (
        <div className="flex flex-col justify-start items-center gap-2">
            <p className="text-gray-600">Update demo data below</p>
            <textarea
                rows={10}
                cols={40}
                value={demoDataJson}
                onChange={(e) => setDemoDataJson(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 font-mono"
            />

            <div className="flex flex-row justify-start items-center gap-2">
                <label className="text-gray-600">
                    Select the field to display
                </label>
                <select
                    value={demoField}
                    onChange={(e) =>
                        setDemoField(e.target.value as BuildBadgeField)
                    }
                >
                    {BUILD_BADGE_FIELD_NAMES_LIST.map((field) => (
                        <option key={field} value={field}>
                            {BUILD_BADGE_FIELD_NAMES[field]}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
                <div className="flex flex-row justify-start items-center gap-2">
                    <label className="text-gray-600">Danger?</label>
                    <input
                        type="checkbox"
                        checked={demoDanger}
                        onChange={(e) => setDemoDanger(e.target.checked)}
                    />
                </div>

                <div className="flex flex-row justify-start items-center gap-2">
                    <label className="text-gray-600">Warning?</label>
                    <input
                        type="checkbox"
                        checked={demoWarning}
                        onChange={(e) => setDemoWarning(e.target.checked)}
                    />
                </div>

                <div className="flex flex-row justify-start items-center gap-2">
                    <label className="text-gray-600">Info?</label>
                    <input
                        type="checkbox"
                        checked={demoInfo}
                        onChange={(e) => setDemoInfo(e.target.checked)}
                    />
                </div>
            </div>

            <BuildBadge
                value={demoDataObject}
                field={demoField}
                danger={demoDanger}
                warning={demoWarning}
                info={demoInfo}
            />
        </div>
    );
}
